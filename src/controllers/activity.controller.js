import Activity from "../models/Activity.model";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const one = await Activity.create(data);
        return res.status(201).json({
            message: "CREATED ACTIVITY_ID: " + one._id,
        });
    } catch (error) {
        return next(error);
    }
};

const read = async (req, res, next) => {
    try {
        let queries = {};
        if (req.query.board_id) {
            queries.board_id = req.query.board_id;
        }
        const all = await Activity.find(queries)
            .select("-createdAt -updatedAt -__v")
            .populate("board_id", "name")
            .sort("name");
        if (all.length === 0) {
            const error = new Error("ACTIVITYS NOT FOUND");
            error.status = 404;
            throw error;
        }
        return res.status(200).json({
            response: all,
        });
    } catch (error) {
        return next(error);
    }
};

const readOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const one = await Activity.findOne({ _id: id })
            .select("-createdAt -updatedAt -__v")
            .populate("board_id", "name");
        if (!one) {
            const error = new Error("ACTIVITY NOT FOUND");
            error.status = 404;
            throw error;
        }
        return res.status(200).json({
            response: one,
        });
    } catch (error) {
        return next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const opts = { new: true };
        const one = await Activity.findByIdAndUpdate(id, data, opts)
            .select("-createdAt -updatedAt -__v")
            .populate("board_id", "name");
        if (!one) {
            const error = new Error("ACTIVITY NOT FOUND");
            error.status = 404;
            throw error;
        }
        return res.status(200).json({
            response: one,
        });
    } catch (error) {
        return next(error);
    }
};

const destroyOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const one = await Activity.findByIdAndDelete(id)
            .select("-createdAt -updatedAt -__v")
            .populate("board_id", "name");
        if (!one) {
            const error = new Error("ACTIVITY NOT FOUND");
            error.status = 404;
            throw error;
        }
        return res.status(200).json({
            response: one,
        });
    } catch (error) {
        return next(error);
    }
};

export { create, read, readOne, updateOne, destroyOne };
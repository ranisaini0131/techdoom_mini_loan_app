export const isAdmin = async (req, res, next) => {
    try {
        if (req.user.role === "admin") {
            next();
        } else {
            return res.json({
                success: false,
                message: "You are not an admin, hence you can access this api!!",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

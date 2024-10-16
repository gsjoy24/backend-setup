import config from "../config";
import { Admin } from "../modules/Admin/admin.model";

const superAdmin = {
  name: "Super Admin",
  email: config.super_admin_email,
  password: config.super_admin_password,
  role: "admin",
};

const seedSuperAdmin = async () => {
  const isSuperAdminExists = await Admin.findOne({
    email: config.super_admin_email,
  });
  if (!isSuperAdminExists) {
    await Admin.create(superAdmin);
  }
};

export default seedSuperAdmin;

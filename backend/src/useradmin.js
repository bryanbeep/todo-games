const bcrypt = require("bcryptjs");
const sequelize = require("./config/database");
const User = require("./models/User");

async function useradmin() {
  try {
    await sequelize.sync();

    const passwordHash = await bcrypt.hash("admin123", 10);

    await User.create({
      username: "admin",
      password: passwordHash,
    });

    console.log("Usuario admin creado correctamente");
    process.exit(0);
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    process.exit(1);
  }
}

useradmin();

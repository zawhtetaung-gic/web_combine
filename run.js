const detect = require("detect-port").default;
const { exec } = require("child_process");
const projects = require("./config");

(async () => {
  for (const project of projects) {
    for (const service of project.services) {
      const port = await detect(service.port);

      let command = service.command;

      if (!command) {
        console.log(
          `⚠️ Missing command for ${service.type} in ${project.name}`,
        );
        continue;
      }

      if (command.includes("--port")) {
        command = command.replace("--port", `--port=${port}`);
      }

      console.log(
        `🚀 Starting ${project.name} - ${service.type} on port ${port}`,
      );

      exec(command, {
        cwd: service.path,
      });
    }
  }
})();

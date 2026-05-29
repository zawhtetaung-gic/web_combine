const detect = require("detect-port").default;
const { exec } = require("child_process");
const projects = require("./config");

(async () => {
  for (const project of projects) {
    const port = await detect(project.port);

    let command = project.command;

    if (command.includes("--port")) {
      command = command.replace("--port", `--port=${port}`);
    }

    console.log(`🚀 Starting ${project.name} on port ${port}`);

    exec(command, {
      cwd: project.path,
    });
  }
})();

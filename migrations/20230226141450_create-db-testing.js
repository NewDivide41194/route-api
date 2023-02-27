const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(geometry) => "locations"
 * changeColumn(geometry) => "routes"
 *
 */

const info = {
  revision: 3,
  name: "create-db-testing",
  created: "2023-02-26T14:14:50.296Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "locations",
      "geometry",
      {
        type: Sequelize.GEOMETRY("POINT"),
        field: "geometry",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "routes",
      "geometry",
      {
        type: Sequelize.GEOMETRY("POINT"),
        field: "geometry",
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "locations",
      "geometry",
      {
        type: Sequelize.GEOMETRY("POINT", 4326),
        field: "geometry",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "routes",
      "geometry",
      {
        type: Sequelize.GEOMETRY,
        field: "geometry",
        allowNull: false,
        fields: "route",
      },
      { transaction },
    ],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};

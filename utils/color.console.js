import chalk from "chalk";

export const print = (value) => {
  console.log(chalk.hex("#fff")(value));
};

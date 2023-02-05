import { GuessThePokemon } from "discord-gamecord";

/** @type {import('../../utils/types').SlashCommand} */
export default {
  name: "whosthatpokemon",
  description: "Who's that Pokémon?!",
  run: ({ client, interaction }) => {
    const game = new GuessThePokemon({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: "Who's that Pokémon?!",
        color: client.config.color,
      },
      winMessage: "You guessed it right! It was **{pokemon}**.",
      loseMessage: "Better luck next time! It was **{pokemon}**.",
      errMessage: "Uh oh, we had an oopsie! Please try again.",
      playerOnlyMessage: "❌ Only {player} can use these buttons.",
    });
    game.startGame();
  },
};

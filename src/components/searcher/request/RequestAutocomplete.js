export default function RequestAutocomplete(search) {
  let autocompletado = fetch(
    `https://api.giphy.com/v1/gifs/search/tags?api_key=chciLAiJmVF5UuOqMilNTkN8rcJTEiqT&q=${search}&limit=5`
  );

  return autocompletado;
}

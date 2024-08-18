const typewriter = (text, delay = 25) => {
  let index = 0;
  const interval = setInterval(() => {
    process.stdout.write(text[index]);
    index++;
    if (index === text.length) {
      clearInterval(interval);
      process.stdout.write("\n");
    }
  }, delay);
};

const description = process.argv.slice(2).join(" ");
typewriter(description);

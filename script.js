const quotes = [
      "Code is like humor. When you have to explain it, it’s bad.",
      "First, solve the problem. Then, write the code.",
      "Experience is the name everyone gives to their mistakes.",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      "Simplicity is the soul of efficiency."
    ];

    const colors = ["#e3f2fd", "#fce4ec", "#e8f5e9", "#fff3e0", "#ede7f6", "#f3e5f5"];

    function showMotivation() {
      // Random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").innerText = randomQuote;

      // Random background color
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
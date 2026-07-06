import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
              colors: {
                      charcoal: "#0b0b0c",
                              champagne: "#d4b483",
                                    },
                                        },
                                          },
                                            plugins: [],
                                            };
                                            export default config;
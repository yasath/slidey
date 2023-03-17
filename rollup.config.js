import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true
        }),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss(),
        copy({
            targets: [
                {
                    src: "src/index.css",
                    dest: "build",
                    rename: "index.css"
                },
                {
                    src: "src/github-markdown-light.css",
                    dest: "build",
                    rename: "github-markdown-light.css"
                },
                {
                    src: "src/github-markdown-dark.css",
                    dest: "build",
                    rename: "github-markdown-dark.css"
                }
            ]
        })
    ]
};

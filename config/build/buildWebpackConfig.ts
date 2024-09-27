import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolvers';
import path from 'path';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode } = options

    return {
        mode,
        entry: paths.entry,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
    }
}
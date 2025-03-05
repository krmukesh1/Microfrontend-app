import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';
import webpack from 'webpack';
import dotenv from 'dotenv';
import { expand as dotenvExpand } from 'dotenv-expand';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config();
console.log(process.env.REACT_APP_ENV);
dotenvExpand(env);

const configPath = path.resolve(__dirname, './remoteConfig.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
export default {
	entry: './index.js',
	mode: 'development',
	output: {
		publicPath: 'auto',
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
	},
	target: 'web',
	devServer: {
		port: '8080',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: false,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
		new ModuleFederationPlugin({
			name: 'HostApp',
			filename: 'remoteEntry.js',
			remotes: { ...config },
			exposes: {},
			shared: {
				react: { singleton: true, requiredVersion: false },
				'react-dom': { singleton: true, requiredVersion: false },
			},
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};

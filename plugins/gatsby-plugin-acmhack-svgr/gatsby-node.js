// Adapted from
// https://github.com/zabute/gatsby-plugin-svgr/blob/5087926076e61a0d5681c842af42c73d55a89653/gatsby-node.js,
// MIT-licensed.

const resolve = module => require.resolve(module);

exports.onCreateWebpackConfig = (
	{ getConfig, actions, stage, loaders },
	// `plugins` is unused in this function but should not be included in
	// svgrOptions.
	// eslint-disable-next-line no-unused-vars
	{ plugins, include, exclude, ...svgrOptions }
) => {
	const { replaceWebpackConfig, setWebpackConfig } = actions;
	const existingConfig = getConfig();

	const rules = existingConfig.module.rules.map(rule => {
		if (
			String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)
		) {
			return {
				...rule,
				test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/
			};
		}

		return rule;
	});

	replaceWebpackConfig({
		...existingConfig,
		module: {
			...existingConfig.module,
			rules
		}
	});

	const fileLoader = loaders.file();

	const svgoLoader = {
		loader: resolve('svgo-loader')
	};

	// for non-javascript issuers
	const nonJs = {
		test: /\.svg$/,
		use: [fileLoader, svgoLoader],
		issuer: {
			test: /\.(?!(js|jsx|ts|tsx)$)([^.]+$)/
		}
	};

	const svgrLoader = {
		loader: resolve('@svgr/webpack'),
		options: svgrOptions
	};

	// add new svg rule
	const svgrRule = {
		test: /\.svg$/,
		use: [svgrLoader, fileLoader, svgoLoader],
		issuer: {
			test: /\.(js|jsx|ts|tsx)$/
		},
		include,
		exclude
	};

	// for excluded assets
	const excludedRule = {
		test: /\.svg$/,
		use: [fileLoader, svgoLoader],
		issuer: svgrRule.issuer,
		include: exclude,
		exclude: include
	};

	const configRules = [];

	switch (stage) {
	case 'develop':
	case 'build-javascript':
	case 'build-html':
	case 'develop-html':
		if (include || exclude) {
			configRules.push(excludedRule);
		}

		configRules.push(nonJs, svgrRule);
		break;
	}

	setWebpackConfig({
		module: {
			rules: configRules
		}
	});
};

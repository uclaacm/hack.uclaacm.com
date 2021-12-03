// Adapted from
// https://github.com/zabute/gatsby-plugin-svgr/blob/5178de44d0cdda334c030ce0b19cf095bdbb2b9d/gatsby-node.js,
// MIT-licensed.
//
// We replaced urlLoader in the original gatsby-node.js with a sequence of
// fileLoader and svgoLoader.
//
// We also fixed comments to say "2.30.0" rather than the erroneous "2.3.0".

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
		// Gatsby < 2.30.0 (no AVIF support)
		if (
			String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)
		) {
			return {
				...rule,
				test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/
			};
		}

		// Gatsby ≥ 2.30.0 (AVIF support)
		if (
			String(rule.test) ===
      String(/\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/)
		) {
			return {
				...rule,
				test: /\.(ico|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/
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
			and: [/\.(?!(js|jsx|ts|tsx)$)([^.]+$)/]
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
			and: [/\.(js|jsx|ts|tsx)$/]
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
		},
		resolve: {
			fallback: {
				path: resolve('path-browserify') // Needed this otherwise it failed
			}
		}
	});
};

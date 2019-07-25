/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

/**
 * This import sets the margin of body to 0.
 * The Gatsby Material-UI plugin adds margin to body
 * which we do not want.
 */
import './src/styles/global.css';

/**
 * PrismJS theme for code highlighting in blog markdown.
 * We are using the default theme here.
 */
require('prismjs/themes/prism.css');

import React from 'react';
import {
  Layout,
  HomepageCollectionGrid,
  FeaturedProducts,
  Seo,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  return (
    <Layout>
      <Seo description="the home page" title="Home" />
      <HomepageCollectionGrid
        collections={collections.filter(coll => coll.title !== 'Featured')}
      />
      {!!collections.find(coll => coll.title === 'Featured') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;

//  <p>Welcome to the Gatsby "^2.23.12" &amp; Shopify starter.</p>

// npm WARN cssnano@5.0.3 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN cssnano-preset-default@5.1.0 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN cssnano-utils@2.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN eslint-config-react-app@6.0.0 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN express-graphql@0.9.0 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN gatsby-background-image@1.1.1 requires a _________________ react@16.x ____________________ installed. You must install peer dependencies yourself.
// npm WARN gatsby-background-image@1.1.1 requires a _________________ react-dom@16.x ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-colormin@5.1.0 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-convert-values@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-discard-comments@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-discard-duplicates@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-discard-empty@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-discard-overridden@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-merge-longhand@5.0.2 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-merge-rules@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-minify-font-values@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-minify-gradients@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-minify-params@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-minify-selectors@5.1.0 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-charset@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-display-values@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-positions@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-repeat-style@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-string@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-timing-functions@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-unicode@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-url@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-normalize-whitespace@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-ordered-values@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-reduce-initial@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-reduce-transforms@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-svgo@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN postcss-unique-selectors@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN react-side-effect@2.1.0 requires a _________________ react@^16.3.0 ____________________ installed. You must install peer dependencies yourself.
// npm WARN stylehacks@5.0.1 requires a _________________  ____________________ installed. You must install peer dependencies yourself.
// npm WARN ts-node@9.1.1 requires a _________________ typescript@>=2.7 ____________________ installed. You must install peer dependencies yourself.
// npm WARN tsutils@3.21.0 requires a _________________  || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none
// is installed. You must install peer dependencies yourself.
// npm WARN babel-preset-gatsby@1.5.0 requires a _________________ core-js@^3.0.0 ____________________ installed. You must install peer dependencies yourself.
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

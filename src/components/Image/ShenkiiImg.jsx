/* eslint-disable no-nested-ternary */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ShenkiiImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      shenkii1: file(relativePath: { eq: "shenkii_web.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userflow1: file(relativePath: { eq: "userflow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marketplace1: file(relativePath: { eq: "shenkii_market1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marketplace2: file(relativePath: { eq: "shenkii_market2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inspiration1: file(relativePath: { eq: "inspiration1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      artpage1: file(relativePath: { eq: "art_page1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      artpageOld: file(relativePath: { eq: "art_page2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      {id === 1 ? (
        <Img fluid={data.shenkii1.childImageSharp.fluid} />
      ) : id === 2 ? (
        <Img fluid={data.userflow1.childImageSharp.fluid} />
      ) : id === 3 ? (
        <Img fluid={data.marketplace1.childImageSharp.fluid} />
      ) : id === 4 ? (
        <Img fluid={data.marketplace2.childImageSharp.fluid} />
      ) : id === 5 ? (
        <Img fluid={data.inspiration1.childImageSharp.fluid} />
      ) : id === 6 ? (
        <Img fluid={data.artpage1.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.artpageOld.childImageSharp.fluid} />
      )}
    </>
  );
};

export default ShenkiiImage;

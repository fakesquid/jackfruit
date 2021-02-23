/* eslint-disable no-nested-ternary */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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

const AboutImage = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "about/Profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      singapore1: file(relativePath: { eq: "about/singapore1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul1: file(relativePath: { eq: "about/seoul1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul2: file(relativePath: { eq: "about/seoul2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seoul3: file(relativePath: { eq: "about/seoul3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nice1: file(relativePath: { eq: "about/nice1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      huashan1: file(relativePath: { eq: "about/huashan1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food1: file(relativePath: { eq: "about/food1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food2: file(relativePath: { eq: "about/food2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food3: file(relativePath: { eq: "about/food3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food4: file(relativePath: { eq: "about/food4.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food5: file(relativePath: { eq: "about/food5.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      food6: file(relativePath: { eq: "about/food6.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const scale = 1.2;

  return (
    <>
      {id === 1 ? (
        <div className="about-img">
          <Img fluid={data.profile.childImageSharp.fluid} />
        </div>
      ) : id === 2 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.seoul1.childImageSharp.fluid} />
        </motion.div>
      ) : id === 3 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.singapore1.childImageSharp.fluid} />
        </motion.div>
      ) : id === 4 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.seoul2.childImageSharp.fluid} />
        </motion.div>
      ) : id === 5 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.seoul3.childImageSharp.fluid} />
        </motion.div>
      ) : id === 6 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.huashan1.childImageSharp.fluid} />
        </motion.div>
      ) : id === 7 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.nice1.childImageSharp.fluid} />
        </motion.div>
      ) : id === 8 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food1.childImageSharp.fluid} />
        </motion.div>
      ) : id === 9 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food2.childImageSharp.fluid} />
        </motion.div>
      ) : id === 10 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food3.childImageSharp.fluid} />
        </motion.div>
      ) : id === 11 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food4.childImageSharp.fluid} />
        </motion.div>
      ) : id === 12 ? (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food5.childImageSharp.fluid} />
        </motion.div>
      ) : (
        <motion.div whileHover={{ scale }}>
          <Img fluid={data.food6.childImageSharp.fluid} />
        </motion.div>
      )}
    </>
  );
};

AboutImage.propTypes = {
  id: PropTypes.number,
};

export default AboutImage;

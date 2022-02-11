<template>
  <div class="page">
    <div class="container">
      <div class="row">
        <h3>This is the approach page</h3>
        {{ portfolios.title }}
        {{ portfolios.subtitle }}
        {{ portfolios.pics }}
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  name: 'Approach',
  // setup() {
  //   const getGraphData = async () => {
  //     const data = await this.$graphcms.request(
  //       gql`
  //         {
  //           portfolios {
  //             caseId
  //             title
  //             subtitle
  //             pics {
  //               url
  //             }
  //           }
  //         }
  //       `
  //     )
  //     return data.project
  //   }

  //   return {
  //     portfolios: getGraphData(),
  //   };
  // }
  data() {
    return {
      portfolios: {},
    }
  },
  async created() {
    const data = await this.$graphcms.request(
      gql`
        {
          portfolios {
            caseId
            title
            subtitle
            pics {
              url
            }
          }
        }
      `
    )
    console.log(data)
    this.portfolios = data.portfolios[0]
  }
};
</script>

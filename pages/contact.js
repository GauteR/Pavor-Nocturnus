import Layout from '../shared/layout'

const LeadText = ({ key, title, text }) => (
    <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">{ title }</h1>
        <p class="lead">{ text }</p>
    </div>
)

export default () => (
    <Layout>
      <div>
          <LeadText key="contact" title="Contact" text="TODO"/>
      </div>
    </Layout>
)
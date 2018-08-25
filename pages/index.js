import Layout from '../shared/layout'

function getPlans () {
  return [
    { 
        id: 'free', 
        title: 'Free',
        price: '€0',
        feature1: "Facebook access only",
        feature2: "Schedule up to 5 posts",
        feature3: "Up to 3 days into the future",
        feature4: "Email support",
        cta: 'Sign up for free!'
    },
    { 
        id: 'pro', 
        title: 'Professional',
        price: '€79',
        feature1: "All social media platforms",
        feature2: "Up to 5000 posts per month",
        feature3: "Pattern posting",
        feature4: "Phone and email support",
        cta: 'Instant access'
    },
    { 
        id: 'enterprise', 
        title: 'Enterprise',
        price: '€149',
        feature1: "All social media platforms",
        feature2: "Unlimited posts per month",
        feature3: "Peak hour posting",
        feature4: "Phone and email support",
        cta: 'Get started now'
    },
  ]
}

const Feature = ({ feature }) => (
    <li>{feature}</li>
)

const CardHighlight = ({ post }) => (
    <div class="card mb-4 shadow-sm border-primary">
        <div class="card-header">
            <h4 class="my-0 font-weight-normal">{ post.title }</h4>
        </div>
        <div class="card-body text-primary">
            <h1 class="card-title pricing-card-title">{ post.price } <small class="text-muted">/ user, mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <Feature feature={ post.feature1 }/>
                <Feature feature={ post.feature2 }/>
                <Feature feature={ post.feature3 }/>
                <Feature feature={ post.feature4 }/>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">{ post.cta }</button>
        </div>
    </div>
)

export default () => (
  <Layout>
    <div>
        <div class="container">
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h5 class="display-4">Direct, pattern and peak hour posting</h5>
                <p class="lead">SomaHub offers 3 different packages, which all have a different style of posting attached to it.</p>
                <p>The first one <strong>Direct</strong> is simply a direct posting routine, where you select the time you want the post to be shown.</p>
                <p>Beside this we have a <strong>Pattern</strong> posting, which is slightly more advanced. It allows you to create a pattern to your posts. For example: "3 days before Christmas", "First Tuesday each month", and similar. You can also make plans throughout the year and have a schedule running when you're on vacation.</p>
                <p>The third and most advanced option is <strong>Peak hour</strong> posting, which will take a little while to set up properly, but once you're there, you can set the system to post your posts during peak hours (when your viewers are online). You can, of course, override this with one of the other methods of posting. Our system will also determine if there is too many posts at that specific time and spread them around a bit to simulate human posting.</p>
            </div>
        </div>
        <div class="container">
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h5 class="display-4">Pricing</h5>
                <p class="lead">Our price tiers are as follows:</p>
                <div class="card-deck mb-3 text-center">
                    {getPlans().map((post) => (
                    <CardHighlight key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  </Layout>
)
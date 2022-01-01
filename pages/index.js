import React from 'react';
import SEO from '/components/seo';
import Banner from '/components/banner';
import Groups from '/components/groups';
import Footer from '/components/footer';

export default function IndexPage() {
  return (
    <div className="text-center md:max-w-lg m-auto">
      <SEO
        description="设计师王艳的个人作品集,熟练运用PS设计,AI作图,活动场景图设计."
        title="王艳的个人作品集"
      />
      <Banner />
      <Groups />
      <Footer />
    </div>
  );
}

export default function sitemap() {
  const baseUrl = 'https://zynex.ai';
  const lastModified = new Date();

  return [
    // Home
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1.0 },

    // Enterprise
    { url: `${baseUrl}/enterprise`, lastModified, changeFrequency: 'weekly', priority: 0.9 },

    // Products
    { url: `${baseUrl}/products/assistant-hub`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/crm-lite`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/finance-plus`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/human-resources`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/knowledge-base`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/marketing-automation`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/project-plus`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/yenai`, lastModified, changeFrequency: 'weekly', priority: 0.8 },

    // Solutions
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/solutions/ai-solutions`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/solutions/b2b-development`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/solutions/ecommerce`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/solutions/enterprise-solutions`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/solutions/saas-development`, lastModified, changeFrequency: 'weekly', priority: 0.7 },

    // Industries
    { url: `${baseUrl}/industries/financial-services`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/industries/healthcare`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/industries/higher-education`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/industries/manufacturing`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/industries/retail`, lastModified, changeFrequency: 'weekly', priority: 0.7 },

    // Resources
    { url: `${baseUrl}/resources/blog`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/community`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/concierge`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/developers`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/help-center`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/news`, lastModified, changeFrequency: 'weekly', priority: 0.5 },
    { url: `${baseUrl}/resources/partners`, lastModified, changeFrequency: 'weekly', priority: 0.5 },

    // Legal
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
  ];
}

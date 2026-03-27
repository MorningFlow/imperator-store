/**
 * Mock Shopify Storefront API Service
 * 
 * Replace this implementation when wiring up the actual Shopify Storefront API.
 */

// Dummy environment variables
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

/**
 * Executes a GraphQL query against the Shopify Storefront API.
 */
export async function shopifyFetch({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken || '',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Shopify API HTTP Error: ${response.status} ${text}`);
    }

    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(
        `Shopify API Errors: ${errors.map((e: any) => e.message).join(', ')}`
      );
    }

    return data;
  } catch (error) {
    console.warn("Using mock response due to Shopify fetch error/missing tokens");
    return getMockDataForQuery(query);
  }
}

/**
 * Returns mock data when no valid Shopify token is set.
 */
function getMockDataForQuery(query: string) {
  // Simple mock implementation for the Collection items
  if (query.includes("products")) {
    return {
      products: {
        edges: [
          {
            node: {
              id: "mock_aquila_1",
              title: "The Recurve · Aquila",
              handle: "aquila-recurve",
              description: "Sculpted for Power.",
              priceRange: {
                minVariantPrice: { amount: "1299.00", currencyCode: "USD" }
              }
            }
          },
          {
            node: {
              id: "mock_praetorian_2",
              title: "The Longbow · Praetorian",
              handle: "praetorian-longbow",
              description: "The Weapon of Emperors.",
              priceRange: {
                minVariantPrice: { amount: "1299.00", currencyCode: "USD" }
              }
            }
          }
        ]
      }
    };
  }
  return {};
}

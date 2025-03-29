<script lang="ts">
import { Svedit, Text, Container } from 'svedit';
import { EntrySession } from 'svedit';

let entry_session = new EntrySession({
  type: 'real_estate',
  title: ['Luxury Beachfront Villa', []],
  price: ['$2,500,000', [
    [0, 1, 'currency']
  ]],
  location: ['Miami Beach, Florida', []],
  description: ['Stunning beachfront villa with panoramic ocean views. This luxurious property features 5 bedrooms, 6 bathrooms, and a private infinity pool.', [
    [0, 19, 'emphasis'],
    [61, 72, 'highlight']
  ]],
  features: [
    { 
      type: 'feature',
      icon: '🛏️',
      title: ['Bedrooms', []],
      value: ['5', []]
    },
    {
      type: 'feature',
      icon: '🚿',
      title: ['Bathrooms', []],
      value: ['6', []]
    },
    {
      type: 'feature',
      icon: '📏',
      title: ['Square Feet', []],
      value: ['4,500', []]
    }
  ],
  amenities: [
    { type: 'amenity', description: ['Private infinity pool', []] },
    { type: 'amenity', description: ['Direct beach access', []] },
    { type: 'amenity', description: ['Smart home system', []] },
    { type: 'amenity', description: ['Wine cellar', []] }
  ]
});
</script>

<Svedit {entry_session} editable={true} class="real-estate-product">
  <div class="hero">
    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&auto=format" alt="Luxury villa" />
  </div>

  <div class="content">
    <div class="header">
      <Text path={['title']} class="title" />
      <Text path={['price']} class="price" />
      <Text path={['location']} class="location" />
    </div>

    <div class="description">
      <Text path={['description']} />
    </div>

    <div class="features">
      <Container path={['features']} class="features-grid">
        {#snippet block(block, path)}
          <div class="feature">
            <span class="icon">{block.icon}</span>
            <Text path={[...path, 'title']} class="feature-title" />
            <Text path={[...path, 'value']} class="feature-value" />
          </div>
        {/snippet}
      </Container>
    </div>

    <div class="amenities">
      <h3>Amenities</h3>
      <Container path={['amenities']} class="amenities-list">
        {#snippet block(block, path)}
          <div class="amenity">
            <Text path={[...path, 'description']} />
          </div>
        {/snippet}
      </Container>
    </div>
  </div>
</Svedit>

<style>
.real-estate-product {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3748;
}

.price {
  font-size: 1.8rem;
  color: #48bb78;
  font-weight: 600;
}

.location {
  font-size: 1.2rem;
  color: #718096;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
}

.features {
  padding: 2rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.feature-title {
  font-size: 1rem;
  color: #718096;
  margin-bottom: 0.25rem;
}

.feature-value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
}

.amenities {
  padding: 2rem 0;
}

.amenities h3 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.amenities-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.amenity {
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #4a5568;
}
</style>
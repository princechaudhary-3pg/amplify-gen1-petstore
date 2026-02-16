import { FormCheckout } from '../ui-components';

export default function PetDetails() {
  return (
    <FormCheckout
      width={"100%"}
      overrides={{
        image: {
          src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
          alt: "Cactus plant",
        },
      }}
    />
  );
}

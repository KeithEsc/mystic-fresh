import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-4xl mx-auto text-[var(--color-dark-blue)] text-base"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
  <AccordionTrigger>What services does Mystic Manes in Colorado Springs offer?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
      Kasey provides haircuts, coloring, highlights, balayage, styling, Keratin smoothing
      treatments, DevaCurl cuts, Ouidad cuts, halo extensions, and more. 
    </p>
  </AccordionContent>
</AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I need to book an appointment or do you accept walk-ins?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance font-light">
          <p>
           We recommend booking appointments to secure your preferred time. Walk-ins are welcome based on availability (message in advance).
          </p>

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I prepare for my hair coloring appointment?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance font-light">
          <p>
Arrive with clean, dry hair and avoid washing it immediately before your appointment. Bring inspiration photos and be ready to discuss your hair history.
          </p>

        </AccordionContent>
      </AccordionItem>
          <AccordionItem value="item-4">
  <AccordionTrigger>What forms of payment do you accept?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
      We accept cash, debit/credit cards, and mobile payments. 
    </p>
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-5">
  <AccordionTrigger>What is your salon’s cancellation policy?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
      We kindly ask for at least 24–48 hours’ notice if you need to cancel or
      reschedule. Last-minute cancellations or no-shows are not appreciated, but life happens! Please just be communicative with your booking.
    </p>
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-6">
  <AccordionTrigger>Where can I park?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
     Directly beside the building, you’ll find a limited number of spaces. There is additional parking in the lot behind our building and along the street.


    </p>
  </AccordionContent>
</AccordionItem>
<AccordionItem value="item-7">
  <AccordionTrigger>What’s the difference between balayage and highlights?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
      Balayage is a hand-painted technique that creates a soft, natural look, while
      highlights use foils for a more defined contrast. Recommendations can be made based on
      your hair type and desired outcome.
    </p>
  </AccordionContent>
</AccordionItem>

<AccordionItem value="item-8">
  <AccordionTrigger>Do you offer refunds or adjustments?</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4 text-balance font-light">
    <p>
      Your satisfaction is important to us. While we don’t offer refunds, I'm
      happy to make reasonable adjustments within 3 of your appointment.
    </p>
  </AccordionContent>
</AccordionItem>
    </Accordion>
  )
}

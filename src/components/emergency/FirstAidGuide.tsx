
import { Activity, Heart, ThermometerSnow, Bandage, Pill, Droplets } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const firstAidItems = [
  {
    title: 'Heart Attack',
    icon: <Heart className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>Signs include chest pain/pressure, pain in arms/back/jaw, shortness of breath, cold sweat, nausea.</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Call 911 immediately</li>
          <li>Have the person sit or lie down</li>
          <li>Loosen any tight clothing</li>
          <li>If the person is not allergic to aspirin, have them chew one adult aspirin (325 mg) or 4 low-dose aspirin (81 mg)</li>
          <li>If the person becomes unresponsive, begin CPR if trained</li>
        </ol>
      </div>
    )
  },
  {
    title: 'Burns',
    icon: <ThermometerSnow className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>First-degree burns affect only the outer layer of skin, second-degree burns affect both the outer and underlying layer of skin, third-degree burns affect deeper tissues.</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Remove the heat source and any jewelry or tight items</li>
          <li>Cool the burn with cool (not cold) running water for 10-15 minutes</li>
          <li>Cover with a sterile, non-stick bandage</li>
          <li>For severe burns, call 911 immediately</li>
        </ol>
      </div>
    )
  },
  {
    title: 'Cuts and Bleeding',
    icon: <Bandage className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>For minor cuts and scrapes:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Wash hands before treating</li>
          <li>Clean the wound with clean water</li>
          <li>Apply an antiseptic</li>
          <li>Cover with a clean bandage</li>
        </ol>
        <p className="mt-2">For severe bleeding:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Apply direct pressure with a clean cloth or bandage</li>
          <li>Raise the injured area above the heart if possible</li>
          <li>Continue applying pressure</li>
          <li>Call 911 for severe bleeding that doesn't stop</li>
        </ol>
      </div>
    )
  },
  {
    title: 'Choking',
    icon: <Activity className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>Signs include inability to talk, difficulty breathing, clutching the throat.</p>
        <p className="font-medium">For an adult or child over 1 year:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Stand behind the person and wrap your arms around their waist</li>
          <li>Make a fist with one hand and place it above the navel</li>
          <li>Grab your fist with your other hand</li>
          <li>Press into the abdomen with quick, upward thrusts</li>
          <li>Repeat until the object is expelled or help arrives</li>
        </ol>
      </div>
    )
  },
  {
    title: 'Poisoning',
    icon: <Pill className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>Call Poison Control immediately at 1-800-222-1222 for any poisoning.</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Try to identify the poison</li>
          <li>Do not induce vomiting unless directed by professionals</li>
          <li>If poison is on the skin, rinse with running water for 15-20 minutes</li>
          <li>If poison is in the eye, rinse with lukewarm water for 15-20 minutes</li>
          <li>Bring the container or substance to the hospital if possible</li>
        </ol>
      </div>
    )
  },
  {
    title: 'Heat Exhaustion',
    icon: <Droplets className="h-5 w-5 text-red-600" />,
    content: (
      <div className="space-y-2">
        <p>Signs include heavy sweating, cool/moist skin, headache, nausea, dizziness, weakness.</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Move the person to a cool place</li>
          <li>Remove excess clothing</li>
          <li>Apply cool, wet cloths to the body</li>
          <li>Fan the person</li>
          <li>Give small sips of cool water if the person is conscious</li>
          <li>Seek medical attention if symptoms worsen or last longer than 1 hour</li>
        </ol>
      </div>
    )
  }
];

const FirstAidGuide = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Bandage className="mr-2 text-red-600" size={20} />
          First Aid Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600 mb-4">
          These first aid instructions are for informational purposes only and are not a substitute for professional medical advice.
          Always call emergency services (911) in life-threatening situations.
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {firstAidItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:bg-red-50 px-2 rounded-md">
                <div className="flex items-center">
                  <div className="mr-2">{item.icon}</div>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FirstAidGuide;

import { component$, useStore } from '@builder.io/qwik';
import { Button, Card, Header, Dropdown, Toggle, buttonColorClasses, sizeClasses, mobileSizeClasses } from '@luminescent/ui';

interface buttonOptions {
  color?: keyof typeof buttonColorClasses;
  transparent?: boolean;
  size?: keyof typeof sizeClasses;
  mobilesize?: keyof typeof mobileSizeClasses;
  square?: boolean;
  round?: boolean;
}

export default component$(() => {
  const store = useStore<buttonOptions>({});
  return (
    <Card>
      <Header id="button" anchor>
        Button
      </Header>
      <Dropdown id="button-color"
        onChange$={(e, element) => store.color = element.value as keyof typeof buttonColorClasses}
        values={Object.keys(buttonColorClasses).map((color) => ({ name: color, value: color }))}
        value="darkgray"
      >
        color
      </Dropdown>
      <Toggle id="button-transparent"
        onChange$={(e, element) => store.transparent = element.checked}
        label="transparent" />
      <Dropdown id="button-size"
        onChange$={(e, element) => store.size = element.value as keyof typeof sizeClasses}
        values={Object.keys(sizeClasses).map((size) => ({ name: size, value: size }))}
        value="md"
      >
        size
      </Dropdown>
      <Dropdown id="button-mobilesize"
        onChange$={(e, element) => store.mobilesize = element.value as keyof typeof mobileSizeClasses}
        values={Object.keys(mobileSizeClasses).map((size) => ({ name: size, value: size }))}
        value="sm"
      >
        mobilesize
      </Dropdown>
      <Toggle id="button-square"
        onChange$={(e, element) => store.square = element.checked}
        label="square" />
      <Toggle id="button-round"
        onChange$={(e, element) => store.round = element.checked}
        label="round" />
      <div>
        <Button
          color={store.color}
          transparent={store.transparent}
          size={store.size}
          square={store.square}
          round={store.round}
        >
          Button
        </Button>
      </div>
      <textarea class="lum-input lum-pad-sm text-sm lum-bg-gray-800 hover:lum-bg-gray-700 rounded-md h-32" value={`
<Button${(store.color && ` color="${store.color}"`) ?? ''}${store.transparent ? ' transparent' : ''}${store.size ? ` size="${store.size}"` : ''}${store.square ? ' square' : ''}${store.round ? ' round' : ''}>
  Button
</Button>`} />
    </Card>
  );
});

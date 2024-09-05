import { Injectable } from '@nestjs/common';

export type Product = {
  product_id: string;
  title: string;
  description: string;
  price: string;
  amount: string;
  currency: string;
  img: string;
  offer: string | null;
};

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProducts(): Product[] {
    return [
      {
        product_id: '6c54a3a1-7155-43f2-ac0e-d373fdfc9bf2',
        title: 'T-shirt',
        description: 'A white T-shirt',
        price: '9.99',
        amount: '5',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        currency: 'eur',
        offer: '10',
      },
      {
        product_id: 'ba9eaf37-6eb9-49e2-8048-7728242a6586',
        title: 'Jacket',
        description: 'A Black Jacket',
        price: '19.99',
        amount: '30',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70467',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
      {
        product_id: '6b368cbd-efcb-4a81-8ef7-5859d1a70468',
        title: 'Trousers',
        description: 'A blue trousers',
        price: '39.99',
        amount: '0',
        currency: 'eur',
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/121703523_01/w=1500,h=1500,fit=pad',
        offer: null,
      },
    ];
  }
}

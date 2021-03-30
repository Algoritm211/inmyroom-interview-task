import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {IProduct} from "../types/types";
import SofaImg from  '../assets/sofa.png'


const sleep = (ms: number) => new Promise((resolve => setTimeout(resolve, ms)))

class ProductsStore {

  @observable page: number = 0
  _productsWithPages: Array<Array<IProduct>> = [
    [
      {
        id: 1,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 2,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 3,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 4,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 5,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 6,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 7,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 8,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 9,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
    ],
    [
      {
        id: 10,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 11,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
      {
        id: 12,
        photo: SofaImg,
        name: 'Тумба прикроватная Rubus с двумя ящиками',
        rating: 5,
        price: 56723,
        color: 'Черный',
        material: 'Ткань',
        size: 'ш.349 Х в.234 Х г.323',
        mechanism: 'Французская раскладушка',
        merchant: 'Laska Family',
        isLiked: false,
        inBasket: false
      },
    ]
  ]

  @observable allProducts: Array<IProduct> = []
  @observable isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  loadProducts = async () => {
    this.page += 1
    this.isLoading = true
    await sleep(3000)
    runInAction(() => {
      this.allProducts.push(...this._productsWithPages[this.page - 1])
      this.isLoading = false
    })
  }


}

export default new ProductsStore()

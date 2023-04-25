import React from 'react'
import s from './Item.module.css'

const Item = () => {
  return (
    <div className={s.md}>
        <main>
            <div >
                <div>
                    <div>
                        <div >
                            <p>
                                "1984"
                            </p>
                            <p>
                                Джордж Оруэлл
                            </p>
                            <img className='rounded' src='img/19841.webp' width={'95%'} alt='фото'></img>
                            <p>
                                Цена: 250 руб.
                            </p>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <main>
            <div >
                <div>
                    <div>
                        <div >
                            <p>
                                "Граф Монте-Кристо"
                            </p>
                            <p>
                                Александр Дюма
                            </p>
                            <img className='rounded' src='img/gmc1.webp' width={'100%'} alt='фото'></img>
                            <p>
                                Цена: 250 руб.
                            </p>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <main>
            <div >
                <div>
                    <div>
                        <div >
                            <p>
                                "Граф Монте-Кристо"
                            </p>
                            <p>
                                Александр Дюма
                            </p>
                            <img className='rounded' src='img/javaс1.webp' width={'108%'} alt='фото'></img>
                            <p>
                                Цена: 250 руб.
                            </p>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <main>
            <div >
                <div>
                    <div>
                        <div >
                            <p>
                                "Граф Монте-Кристо"
                            </p>
                            <p>
                                Александр Дюма
                            </p>
                            <img className='rounded' src='img/md1.webp' width={'100%'} alt='фото'></img>
                            <p>
                                Цена: 250 руб.
                            </p>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </div>

  )
}

export default Item
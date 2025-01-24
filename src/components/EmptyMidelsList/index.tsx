import Image from 'next/image'

import Button from '../Button'

const EmptyModelsList = () => (
  <div className={'flex flex-col justify-evenly'}>
    <p className={'text-2xl font-extrabold text-blue-600 text-center'}>
      {'No models found for this combination.'}
    </p>
    <div className={'flex justify-center'}>
      <Image
        alt={'Sad Car Image'}
        className={'w-[400px] h-auto'}
        height={100}
        priority
        src={'/emptyCar.png'}
        width={400}
      />
    </div>
    <Button isDisabled={false} link={'/'} label={'Go HOME'} />
  </div>
)

export default EmptyModelsList

import clsx from 'clsx';

const Checkbox = ({index, type, value, action, isChecked}) => {

   const id = `${type}${index}`
   // const peerId = `peer/${id}`
   // const peerClass = `peer-checked/${id}:bg-secondaryDark peer-checked/${id}:text-white`

   // const labelStyle='inline-flex items-center justify-between w-full p-5 text-body bg-neutral-primary-soft border border-default rounded-base cursor-pointer peer-checked:hover:bg-brand-softer peer-checked:border-brand-subtle peer-checked:bg-brand-softer hover:bg-neutral-secondary-medium peer-checked:text-fg-brand-strong'
   return (
      <>
         { value == 'all' ? 
         <input type='checkbox' id={id} value={value} onChange={action} className='hidden' checked={isChecked} /> : 
         <input type='checkbox' id={id} value={value} onChange={action} className='hidden' /> }
         <label htmlFor={id} className={clsx('flex justify-stretch items-center rounded-lg cursor-pointer py-3 px-4 border',
            {'bg-secondaryLight border-secondaryExtraLight hover:bg-secondaryExtraLight': type == 'tense'}, 
            {'bg-primaryLight border-primaryExtraLight hover:bg-primaryExtraLight text-white': type == 'verb'})}>
            <div className="block">
               <div className="w-full capitalize font-medium">{value}</div>
            </div>
         </label>
      </>
   )
}
export default Checkbox;
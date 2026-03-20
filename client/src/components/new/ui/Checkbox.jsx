import clsx from 'clsx';

const Checkbox = ({index, type, value, action, isChecked, ref}) => {

   const id = `${type}${index}`

   const onSelect = (e) => action(value, e.target.checked, ref)

   const origCss = 'flex justify-stretch items-center rounded-lg cursor-pointer py-3 px-4 border'

   return (
      <>
         { value == 'all' ? 
         <input type='checkbox' id={id} value={value} onChange={onSelect} className='hidden' checked={isChecked} /> : 
         <input type='checkbox' id={id} value={value} onChange={onSelect} className='hidden' /> }
         <label htmlFor={id} className={clsx('flex justify-center items-center rounded-lg min-h-6 border w-15 px-1',
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
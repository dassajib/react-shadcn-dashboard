import { Button } from "@/components/ui/button"
import { Plus, Download } from 'lucide-react'
import UomTable from "@/components/shared/UomTable"

const Uom = () => {
  return (
    <div>
      <div className="flex gap-4 flex-col md:flex-row justify-between md:items-center">
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Uom</h2>
          <p className='text-muted-foreground'>
            Here is a list of your Unit of Measurement
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant='outline'
            className='space-x-1'
          >
            <span>Import</span> <Download size={18} />
          </Button>
          <Button className='space-x-1'>
            <span>Create</span> <Plus size={18} />
          </Button>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
        <UomTable />
      </div>
    </div>
  )
}

export default Uom
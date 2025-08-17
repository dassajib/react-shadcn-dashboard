import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { MoreHorizontal } from "lucide-react"
import { UomTableInterface } from "@/interface/uomInterface"

const UomTable = () => {
    // mock data
    const uoms: UomTableInterface[] = [
        { id: 1, name: "Kilogram" },
        { id: 2, name: "Meter" },
    ]

    // modal state
    const [open, setOpen] = useState(false)
    const [selectedUom, setSelectedUom] = useState<UomTableInterface | null>(null)

    const handleDeleteClick = (uom: UomTableInterface) => {
        setSelectedUom(uom)
        setOpen(true)
    }

    const handleConfirmDelete = () => {
        console.log("Deleting UOM:", selectedUom)
        setOpen(false)
        setSelectedUom(null)
    }

    return (
        <div className="py-6 space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Unit of Measurement</h2>

            <div className="rounded-lg border shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Name</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {uoms.map((uom) => (
                            <TableRow key={uom.id}>
                                <TableCell className="font-medium">{uom.name}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-red-600 focus:text-red-600"
                                                onClick={() => handleDeleteClick(uom)}
                                            >
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* delete confirmation modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-[90%] max-w-md rounded-lg sm:rounded-xl">
                    <DialogHeader>
                        <DialogTitle>Confirm Delete</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete{" "}
                            <span className="font-semibold">{selectedUom?.name}</span>?
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                        <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="w-full sm:w-auto"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={handleConfirmDelete}
                            className="w-full sm:w-auto"
                        >
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UomTable
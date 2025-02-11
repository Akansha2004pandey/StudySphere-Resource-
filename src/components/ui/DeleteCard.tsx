import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import { deleteMaterial } from '@/lib/actions/delete.action'
import { useToast } from '@/hooks/use-toast'
import { AlertDialog, AlertDialogContent, AlertDialogDescription,AlertDialogTrigger ,AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'
const DeleteCard = ({coursename, coursecode, content, contentData}:{coursename:string,coursecode:string,content:string, contentData:any},) => {
    const {toast} = useToast();
    const handleDeleteConfirm = () => {
        console.log('Deleted')
        const res=deleteMaterial(coursecode,content,contentData.id);
        toast({title: 'Material Deleted',
           variant: 'default'});
        console.log(res); 
    }
    
  return (
    
       
       <div className='my-2'>
        <Card>
       <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className='text-xl '>{contentData.title}</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant='destructive'>
                <X className="w-5 h-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this message.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        
      </CardHeader>
      <CardContent></CardContent>
    </Card>
       </div>
    
    
  )
}

export default DeleteCard

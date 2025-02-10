import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import { AlertDialog, AlertDialogContent, AlertDialogDescription,AlertDialogTrigger ,AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'
const DeleteCard = ({coursename, coursecode, content, contentData}:{coursename:string,coursecode:string,content:string, contentData:string},) => {
    const handleDeleteConfirm = () => {
        console.log('Deleted')
    }
    
  return (
    
       
       <div>
        <Card>
       <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className='text-xl '>{contentData}</CardTitle>
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

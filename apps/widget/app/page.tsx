'use client'
import { useVapi } from '@/modules/widget/hooks/use-vapi'
import { Button } from '@workspace/ui/components/button'
import React from 'react'

const Page = () => {
  const { startCall, endCall, isSpeaking, isConnecting, isConnected, transcript } = useVapi();

  return (
    <div>
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()}>End Call</Button>
      <div>
        {isSpeaking && <p>Speaking...</p>}
        {isConnecting && <p>Connecting...</p>}
        {isConnected && <p>Connected!</p>}
        <div>
          {JSON.stringify(transcript, null, 2)}
        </div>
      </div>
    </div>
  )
}

export default Page

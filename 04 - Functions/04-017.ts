type Log = (message: string, userId?: string) => void

let log: Log = ( // 1
  message, // 2
  userId = 'Not signed in' // 3
) => { // 4
  let time = new Date().toISOString()
  console.log(time, message, userId)
}

log('Hello', '2');

// 1. We declare a function expression log, and explicitly type it as type Log
// 2. We don't need to annotate our parameters twice. Since message is already annotated as a string as part of the definition for Log, we don't need to type it again here. Instead, we let TypeScript infer it for us from Log.
// 3. We add a default value for userId, since we captured userId's type in our signature for Log, but we couldn't capture the default value as part of Log because Log is a type and can't contain values.
// 4. We don't need to annotate our return type again, since we already declared it as void in our Log type.
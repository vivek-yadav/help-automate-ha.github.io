<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      // Handle form submission here
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }
  </script>
  
  <div class="w-full max-w-lg">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={handleSubmit}>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" bind:value={name}>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" bind:value={email}>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Message
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message here" rows="5" bind:value={message}></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send Message
        </button>
      </div>
    </form>
  </div>
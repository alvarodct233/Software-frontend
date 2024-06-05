import Link from "next/link";

export default async function Login() {
    return(
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">

    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form method="POST" action="/login" className="space-y-4">

            <div>

                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>

                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

            </div>

            <div>

                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

            </div>

            <div>
            <Link href="/Panel" className="w-32">
                <input
                    type="submit" 
                    value="Login"
                    required
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
                />
            </Link>
            </div>

        </form>

        {/* <?php if (isset($error)): ?>

            <p className="mt-4 text-center text-red-500"><?php echo $error; ?></p>

        <?php endif; ?> */}

    </div>

</div>

    )
}
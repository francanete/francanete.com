async function subscribeToNewsletter(emailAddress: string): Promise<any> {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailAddress }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.error || "Network response was not ok");
    }

    const data = await response.json();
    return { status: "success", data };
  } catch (error) {
    return {
      status: "error",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

export default subscribeToNewsletter;

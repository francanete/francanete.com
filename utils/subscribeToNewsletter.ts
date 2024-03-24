/**
 * @fileoverview Utility function to subscribe an email address to the newsletter.
 */

/**
 * Subscribes an email address to the newsletter.
 * @param {string} emailAddress - The email address to subscribe.
 * @returns A promise that resolves to an object with the status and data.
 */
export const subscribeToNewsletter = async (
  emailAddress: string
): Promise<any> => {
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
};

export default subscribeToNewsletter;

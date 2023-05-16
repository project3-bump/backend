const ContentBankModel = require("../models/ContentBank");

const seedContentBank = async (req, res) => {
  try {
    await ContentBankModel.deleteMany();
    await ContentBankModel.create([
      {
        onlyManager: true,
        topic: "Workload",
        topicID: 1,
        subTopics: [
          [
            "Increasing workload",
            "1. Explain the reasons for the increase:",
            "2. What are the new expectations:",
            "3. Discuss if any additional resources or support is required:",
            "4. Offer opportunities for development:",
            "5. Offer reassurance and support:",
          ],
          [
            "Removing DR from a project",
            "Project Name:",
            "1. Explain the reasons for the removal:",
            "2. Acknowledge impact of the decision:",
            "3. Discuss next steps/alternatives:",
            "4. Reiterate importance of their role in the team:",
          ],
          [
            "Reallocating projects within the team",
            "1. Explain the reasons for reallocation:",
            "2. Acknowledge impact of the decision:",
            "3. Highlight potential benefits and opportunities in growth & development:",
            "4. Provide an opportunity/forum for DRs to ask questions:",
            "5. Reiterate importance of their role in the team:",
          ],
        ],
        contentFillers: [
          [
            "Hi ",
            ", I wanted to let you know that we will be increasing your workload in the coming weeks. This is because ",
            ". As a result of this increase, we will need you to take on ",
            ". I understand that this may feel overwhelming, so please let me know if you have any concerns or questions. Let's discuss more if ",
            " is required. I also want to highlight that this increase in workload presents an opportunity for your professional development such as ",
            ". Finally, please know that we are here to support you ",
            ". I have confidence in your ability to succeed, and I am available to provide guidance and assistance as needed. Let's have a chat to talk more in detail.",
          ],
          [
            "Dear ",
            ", I wanted to let you know that we've decided to remove you from ",
            " due to ",
            ". I understand this news may be disappointing and unsettling for you, ",
            ". Moving forward, I would like to discuss some potential next steps and alternatives. ",
            ". I am also available to discuss any concerns or questions you may have about this decision or your role in the team. Please know that your contributions to the team are important, ",
            ". Let's have a chat to talk more in detail.",
          ],
          [
            "Dear Team, I hope this message finds you well. I wanted to take a moment to discuss an important change that will be taking place in our team. We will be realigning some of our projects and reallocating them within the team. ",
            " Let’s work together to make the transition as smooth as possible.",
            " ",
            " I'll be scheduling a team meeting soon to discuss this change in more detail, and I encourage you to bring any questions or concerns you may have. Finally, I want to reiterate the importance of your role in the team.",
            "Let's have a chat to talk more in detail.",
          ],
        ],
      },
      {
        onlyManager: true,
        topic: "Work performance",
        topicID: 2,
        subTopics: [
          [
            "Bad work performance",
            "1. What are some instances where he/she have done well in:",
            "2. What is the specific instance where you felt that he/she is lacking:",
            "3. What are some solutions that you would suggest that he/she can try to do:",
            "4. Words of affirmation:",
          ],
          [
            "Good work performance",
            "1. What are some instances where he/she have done well in:",
            "2. Express appreciation and gratitude:",
            "3. Explain impact of their work:",
            "4. Words of affirmation:",
          ],
        ],
        contentFillers: [
          [
            "Hi ",
            ", I wanted to give you some feedback on your recent performance. First of all, I want to acknowledge the instances where you have done well ",
            " However, there was a specific instance where I felt that you could improve on: ",
            " To address this, I would suggest that ",
            " I want you to know that I have confidence in your ability to make these improvements, and I am here to support you along the way. ",
            " Would you like to have a chat to discuss this in more detail?",
          ],
          [
            "Hi ",
            ", I am thrilled about ",
            " ",
            " Your ability to ",
            " has made a significant impact on our team. ",
            " ",
            " I am excited to see how you can apply these skills to upcoming projects. Let's have a chat to talk more about this.",
          ],
        ],
      },
    ]);
  } catch (error) {}
};

module.exports = {};

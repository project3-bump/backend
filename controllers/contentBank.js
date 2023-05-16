const ContentBankModel = require("../models/ContentBank");

const seedContentBank = async (req, res) => {
  try {
    await ContentBankModel.deleteMany();
    await ContentBankModel.create([
      {
        onlyManager: true,
        topic: "Workload",
        topicID: 1,
        topicPrompts: [
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
        topicPrompts: [
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
      {
        onlyManager: true,
        topic: "Career growth",
        topicID: 3,
        topicPrompts: [
          [
            "Denying promotion",
            "1. Explain the reasons why he/she is not being considered for a promotion:",
            "2. Express empathy and acknowledge that it is disappointing news:",
            "3. What are some next steps that he/she can work on:",
            "4. Offer support:",
          ],
          [
            "Being promoted",
            "1. What is the new position:",
            "2. Explain the details of promotion:",
            "3. Highlight employee's strengths:",
            "4. Discuss expectations for new role:",
            "5. Celebrate the achievement:",
          ],
        ],
        contentFillers: [
          [
            "Hi ",
            ", I wanted to take a moment to speak with you about your recent performance and discuss the promotion process. Unfortunately, after careful consideration, we have decided not to consider you for a promotion at this time.",
            " I know this is disappointing news,  ",
            " Moving forward, I would encourage you to ",
            " Please know that I am here to support you in any way that I can,  ",
            " Would you like to have a chat to discuss this in more detail?",
          ],
          [
            "Hi ",
            ", I am thrilled to inform you that you have been promoted to ",
            " ",
            " These are just some top line details, we can go through it in further detail in a call. Your ability to ",
            " has made a significant impact on our team. As you take on this new role, ",
            " ",
            " Let's have a chat to talk more about this.",
          ],
        ],
      },
      {
        onlyManager: true,
        topic: "Work attitude",
        topicID: 4,
        topicPrompts: [
          [
            "Poor work ethic",
            "1. What are some instances where he/she have done well in:",
            "2. What is the specific instance where you felt that he/she is lacking:",
            "3. What are some solutions that you would suggest that he/she can try to do:",
            "4. Words of affirmation:",
          ],
          [
            "Personal issues affecting work",
            "1. Provide some encouraging words to acknowledge that it is a difficult time for him/her:",
            "2. What is the specific instance where you feel that their personal issues are impacting their work performance or behaviour:",
            "3. What are some possible solutions that you would suggest he/she can do:",
            "4. Words of support:",
          ],
          [
            "Negative Attitude",
            "1. What are some instances where he/she have done well in:",
            "2. What is the specific instance where you felt that he/she is lacking:",
            "3. What are some solutions that you would suggest that he/she can try to do:",
            "4. Words of affirmation:",
          ],
        ],
        contentFillers: [
          [
            "Hi ",
            ", I wanted to give you some feedback on your recent performance. First of all, I want to acknowledge the instances where you have done well. ",
            " However, there was a specific instance where I felt that you could improve on,  ",
            " To address this, I would suggest that ",
            " I want you to know that I have confidence in your ability to make these improvements, and I am here to support you along the way. ",
            " Would you like to have a chat to discuss this in more detail?",
          ],
          [
            "Hi ",
            ", I understand that it's a difficult time for you right now, ",
            " However, I have noticed that your recent work performance and behaviour have been impacted by these personal issues, particularly in the area of ",
            " To help you manage these challenges, I would suggest that you ",
            " I want you to know that we are here to support you through this difficult time, and ",
            " Would you like to have a chat to discuss this in more detail?",
          ],
          [
            "Hi ",
            ", I wanted to give you some feedback on your recent performance. First of all, I want to acknowledge the instances where you have done well ",
            " However, there was a specific instance where I felt that you could improve on ",
            " To address this, I would suggest that ",
            " I want you to know that I have confidence in your ability to make these improvements, and I am here to support you along the way. ",
            " Would you like to have a chat to discuss this in more detail?",
          ],
        ],
      },
      {
        onlyManager: false,
        topic: "Management styles",
        topicID: 5,
        topicPrompts: [
          [
            "Request more guidance",
            "1. Express thanks for the guidance that you have received thus far in:",
            "2. What is the specific problem/situation that requires additional guidance:",
            "3. What have you tried so far to resolve it:",
            "4. What are some specific questions that you have:",
            "5. Thank the manager for their time and willingness to help:",
          ],
          [
            "Request less micromanagement",
            "1. Express thanks for the guidance that you have received thus far in:",
            "2. Give a specific example that your manager micro managed:",
            "3. Explain how micro management is affecting your work:",
            "4. Clarify expectations:",
            "5. What are some solutions that you are proposing:",
            "6. Thank the manager for their time and willingness to help:",
          ],
        ],
        contentFillers: [
          [
            "Dear ",
            ", first of all, I want to express my gratitude for the guidance and support especially in ",
            " However, I am currently facing a challenge with ",
            " and I believe that I require additional guidance to overcome it. I have tried ",
            " but I have not been successful in resolving the issue. I would appreciate it if we could set up a meeting to discuss this matter in more detail. In particular, I have the following questions that I would like to get clarity on: ",
            " Thank you again for your time and willingness to help.",
            " I look forward to working with you to find a solution to this issue.",
          ],
          [
            "Dear ",
            ", I would like to express my appreciation for the guidance and support that you have provided me thus far in  ",
            " However, I wanted to bring to your attention a recent incident where I felt that I was being micromanaged. Specifically, when ",
            ", I felt that my autonomy and judgement were being undermined. This experience made me feel ",
            " and I would like to discuss this issue with you to avoid similar incidents in the future. Therefore, I would like to clarify my expectations ",
            " I am open to feedback and suggestions for improvement, but I believe that I can be more effective if I am given more space to work. Some solutions that I am proposing include ",
            " This can help us work more effectively together and to build a stronger working relationship. ",
            " I am happy to schedule a chat to discuss this further with you if you would like to.",
          ],
        ],
      },
      {
        onlyManager: false,
        topic: "Conflicts",
        topicID: 6,
        topicPrompts: [
          [
            "Providing negative feedback about manager",
            "1. Start off with a positive note, thank manager for guidance and support thus far:",
            "2. Provide one specific example of the behaviour/actions that are concerning:",
            "3. Explain the impact of their behaviour/actions on the team:",
            "4. Offer suggestions:",
            "5. Reiterate that you value the working relationship and just want to help improve the working relationship:",
          ],
          [
            "Conflict with team mates",
            "1. Start off with a positive note, thank manager for guidance and support thus far:",
            "2. What is the issue:",
            "3. Provide one specific example of how you feel about the situation:",
            "4. Request for a face to face meeting to work things out:",
            "5. Reiterate that you value the working relationship and just want to help improve the working relationship:",
          ],
        ],
        contentFillers: [
          [
            "Dear ",
            ", I wanted to take a moment to thank you for your guidance and support thus far. Your dedication to our team is truly appreciated. ",
            " However, ",
            " This made us feel ",
            " I was thinking perhaps we could ",
            " I value our working relationship and just want to help improve the working dynamic.",
            "Would you be open to having a quick chat on this so that we can talk more in detail? ",
          ],
          [
            "Dear ",
            ", I hope this message finds you well. ",
            " I wanted to address a recent situation where I felt we had a miscommunication regarding ",
            ", I felt ",
            ". I was thinking perhaps we could ",
            " .  ",
            " and I think it's important for us to communicate effectively to avoid similar issues in the future. Thank you for your time and consideration. ",
          ],
        ],
      },
      {
        onlyManager: false,
        topic: "Career advancement opportunities",
        topicID: 7,
        topicPrompts: [
          [
            "Asking for a promotion",
            "1. State explicitly what position you would want:",
            "2. Highlight your accomplishments:",
            "3. Describe your goals:",
            "4. Discuss company's needs:",
          ],
          [
            "Asking to be transferred to another team",
            "1. Which team do you want to transfer to:",
            "2. Explain reasons for wanting to transfer:",
            "3. Provide examples of how your skills and experience align with the new team's needs: ",
            "4. Acknowledge impact of your transfer:",
            "5. Outline plan for smooth transition:",
            "6. Express appreciation: ",
          ],
        ],
        contentFillers: [
          [
            "Dear ",
            ", I am writing to express my interest in a ",
            " role within the company. I believe that my skills and experience have developed to the point where I am ready to take on more responsibility and contribute to the success of the company in a new capacity. I wanted to highlight some of my recent accomplishments, such as ",
            " Additionally, I have set specific goals for myself, including ",
            " I believe that this role would be a great fit for my skills and career aspirations. Based on my research, it appears that the company has a need for ",
            ". I believe that I can make valuable contributions in this area. Would you be open to having a quick chat on this so that we can talk more in detail? ",
          ],
          [
            "Dear ",
            ",  I wanted to discuss with you the possibility of transferring to ",
            " within the company. After much thought and consideration,  ",
            ". I believe my skills and experience align well with the needs of the team. Specifically, my experience in ",
            ". I understand that my transfer could have an impact on ",
            ", but I want to assure you that I am committed to making a smooth transition. I have already thought of some potential solutions to ensure that our current projects will not be negatively affected by my move. ",
            " I want to take this opportunity to thank you and the team for ",
            ". I would be grateful if we could arrange a meeting to discuss this further. I am available at your convenience and would be happy to provide additional information about my plans and answer any questions you may have.",
          ],
        ],
      },
      {
        onlyManager: false,
        topic: "Workload",
        topicID: 8,
        topicPrompts: [
          [
            "Requesting for more work opportunities",
            "1. Highlight your accomplishments and your desire to contribute more to the company:",
            "2. Explain why you believe you are ready for more responsibilities:",
            "3. Provide specific examples of how you have demonstrated your readiness for more work:",
            "4. Offer suggestions for projects or tasks you are interested in working on and how they align with the company's goals:",
          ],
          [
            "Requesting for less work",
            "1. Explain the reasons for wanting to reduce workload:",
            "2. Provide specific examples of how the current workload is impacting your performance or well-being:",
            "3. Offer potential solutions to help alleviate the workload, such as delegating tasks or prioritising assignments:",
            "4. Discuss the potential impact on team or company goals if workload is not adjusted:",
          ],
        ],
        contentFillers: [
          [
            "Dear ",
            ",  I wanted to express my desire to take on more responsibilities and contribute further to the company. As you know, I ",
            " I believe I am ready for more responsibilities because ",
            " and have demonstrated my readiness in several ways. For example, ",
            " I have some specific project suggestions that I would be interested in working on, such as ",
            " which aligns with our company's goals. I would love to schedule a meeting to discuss this further and hear your thoughts on how we can work together to make this happen. Thank you for your consideration and continued support. ",
          ],
          [
            "Dear ",
            ", I am reaching out to discuss my current workload as I believe ",
            " The workload has been consistently heavy, and I have noticed ",
            " I would like to suggest that we ",
            ". If my workload continues at its current level, I worry that it may start to impact ",
            " I would appreciate the opportunity to discuss this matter further with you and explore potential solutions together. Would it be possible to schedule a meeting to discuss this in more detail?",
          ],
        ],
      },
    ]);
    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

const getManagerContentBank = async (req, res) => {
  try {
    const managerContent = await ContentBankModel.find({ onlyManager: true });
    res.json(managerContent);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get manager content" });
  }
};

const getNonManagerContentBank = async (req, res) => {
  try {
    const nonManagerContent = await ContentBankModel.find({
      onlyManager: false,
    });
    res.json(nonManagerContent);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get manager content" });
  }
};

module.exports = {
  seedContentBank,
  getManagerContentBank,
  getNonManagerContentBank,
};

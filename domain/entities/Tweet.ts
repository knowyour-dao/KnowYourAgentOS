/**
 * KnowYourAgentOS - AI Agent Playground For Web3
 * An open-source platform for building agents and community of versatile agents.
 * Helps developers and researchers assess agent capabilities, safety, and performance through
 * their on-chain and off-chain activities.
 * https://knowyouragent.xyz | https://x.com/know_your_agent
 * 
 * Copyright (c) 2025 KnowYourAgent
 * MIT License - Feel free to hack and share!
 * 
 * 
 * The full MIT license text can be found in the LICENSE file
 * in the root directory of this source tree.
 */

// domain/entities/Tweet.ts
import { TweetStatus } from '../interfaces/AgentEnums';

export class Tweet {
  id: string;
  agentId: string;
  content: string;
  status: TweetStatus;

  constructor(props: {
    id: string;
    agentId: string;
    content: string;
    status?: TweetStatus;
  }) {
    this.id = props.id;
    this.agentId = props.agentId;
    this.content = props.content;
    this.status = props.status ?? TweetStatus.PENDING;
  }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModel = void 0;
const mongoose_1 = require("mongoose");
const SubscriptionSchema = new mongoose_1.Schema({
    organizationId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Organization', required: true, unique: true, index: true },
    stripeCustomerId: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true },
    stripePriceId: { type: String, required: true },
    status: {
        type: String,
        enum: ['trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete'],
        required: true,
    },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    cancelAtPeriodEnd: { type: Boolean, default: false },
    canceledAt: { type: Date },
    trialEnd: { type: Date },
}, { timestamps: true });
exports.SubscriptionModel = (0, mongoose_1.model)("Subscription", SubscriptionSchema);
//# sourceMappingURL=Subscription.js.map